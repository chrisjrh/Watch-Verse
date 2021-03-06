import request from 'superagent'
const rootUrl = '/api/v1'

export async function addUser (user) {
  return request.post(`${rootUrl}/users`)
    .set('Authorization', `Bearer ${user.token}`)
    .send({ email: user.email })
    .catch(logError)
}

function logError (err) {
  if (err.message === 'Forbidden') {
    throw new Error('Only the user who added the -- may update and delete it')
  } else {
    // eslint-disable-next-line no-console
    console.error(
      'Error consuming the API (in client/api.js):',
      err.message
    )
    throw err
  }
}
