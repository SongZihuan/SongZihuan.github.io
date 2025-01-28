import request from '@/utils/msgrequest'

export function sendMsgToMail(name: string, message: string) {
  return request.post('', {
    name: name,
    message: message,
    refer: 'personal website (song-zh.com)'
  })
}
