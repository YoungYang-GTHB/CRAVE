import { access, readFile, stat } from 'node:fs/promises'
import { createHash } from 'node:crypto'
import { resolve } from 'node:path'

const root = process.cwd()
const required = [
  'public/paper/crave-preprint.pdf',
  'public/media/folding/folding-crave-demo.mp4',
  'public/media/nail/nail-crave-demo.mp4',
  'public/media/writing/writing-crave-demo.mp4',
  'src/data/results.ts',
  'src/data/links.ts',
]

for (const file of required) {
  await access(resolve(root, file))
  const item = await stat(resolve(root, file))
  if (item.size === 0) throw new Error(`${file} is empty`)
}

const sourceFiles = [
  'src/App.tsx',
  'src/components/Hero.tsx',
  'src/components/MethodPipeline.tsx',
  'src/components/Results.tsx',
  'src/components/RobotGallery.tsx',
  'src/data/results.ts',
]

const combined = (await Promise.all(sourceFiles.map((file) => readFile(resolve(root, file), 'utf8')))).join('\n')
for (const forbidden of ['Task_A', 'Task_N', 'Task_WI', 'end-to-end speedup', 'CRAVE value']) {
  if (combined.includes(forbidden)) throw new Error(`Public source contains forbidden wording: ${forbidden}`)
}

const requiredClaims = ['11, trials: 20', '15, trials: 20', '16, trials: 20', 'framewiseReductionSeconds: 12.72', 'sftCompletion: 30', 'craveCompletion: 35']
for (const claim of requiredClaims) {
  if (!combined.includes(claim)) throw new Error(`Canonical claim missing: ${claim}`)
}

const manifest = JSON.parse(await readFile(resolve(root, 'public/media/manifest.json'), 'utf8'))
let videoBytes = 0
for (const clip of manifest.clips) {
  const clipPath = resolve(root, 'public', clip.target)
  const clipData = await readFile(clipPath)
  const clipHash = createHash('sha256').update(clipData).digest('hex')
  if (clipData.byteLength !== clip.bytes) throw new Error(`${clip.target} size does not match the media manifest`)
  if (clipHash !== clip.sha256) throw new Error(`${clip.target} hash does not match the media manifest`)
  if (clipData.byteLength > 2 * 1024 * 1024) throw new Error(`${clip.target} exceeds the 2 MB per-clip budget`)
  videoBytes += clipData.byteLength
}
if (videoBytes !== manifest.video_budget.total_bytes) throw new Error('Video total does not match the media manifest')
if (videoBytes > 3 * 1024 * 1024) throw new Error('Website videos exceed the 3 MB total budget')

console.log(`Verified ${required.length} required artifacts, public terminology, canonical headline values, and ${(videoBytes / 1048576).toFixed(2)} MB video budget.`)
