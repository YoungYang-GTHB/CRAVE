export const base = import.meta.env.BASE_URL

export const foldingFrames = [
  { src: `${base}media/folding/frame_01_t00p6.jpg`, label: 'random start' },
  { src: `${base}media/folding/frame_02_t08p0.jpg`, label: 'grasp' },
  { src: `${base}media/folding/frame_03_t15p0.jpg`, label: 'stretch' },
  { src: `${base}media/folding/frame_04_t23p0.jpg`, label: 'reorient' },
  { src: `${base}media/folding/frame_05_t31p0.jpg`, label: 'align' },
  { src: `${base}media/folding/frame_06_t38p5.jpg`, label: 'folded' },
]

export const taskMedia = {
  folding: {
    title: 'Garment folding',
    descriptor: 'bimanual deformable manipulation',
    video: `${base}media/folding/folding-crave-demo.mp4`,
    poster: `${base}media/folding/frame_06_t38p5.jpg`,
    evidence: '150 / 300 / 450 demonstrations · 20 rollouts per checkpoint',
  },
  nail: {
    title: 'Nail painting',
    descriptor: 'fine tool–surface contact',
    video: `${base}media/nail/nail-crave-demo.mp4`,
    poster: `${base}media/nail/demo01_t150p0.jpg`,
    evidence: '20 episodes per route · four-stage completion',
  },
  writing: {
    title: 'Ordered writing',
    descriptor: 'single-arm precision sequence',
    video: `${base}media/writing/writing-crave-demo.mp4`,
    poster: `${base}media/writing/demo01_t27p0.jpg`,
    evidence: '55 demonstrations · 16 / 19 unique rollouts completed',
  },
}
