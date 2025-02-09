import request from '@/utils/msgrequest'

export function sendMsgToMail(name: string, email: string, message: string) {
  return request.post('', {
    name: name,
    email: email,
    message: message,
    refer: 'personal website (song-zh.com)'
  })
}
