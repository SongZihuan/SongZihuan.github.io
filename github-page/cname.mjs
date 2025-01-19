import fs from 'fs'

const domain = 'song-zh.com'

fs.writeFile('./docs/CNAME', domain, () => {})
