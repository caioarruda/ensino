const updatePurchase = async (notification) => {
  const query = JSON.stringify({
    query: `mutation {
          updatePurchase(
            purchaseToken: "${notification.purchaseToken}"
            notificationType: ${notification.notificationType}
            sku: ${notification.sku}
          )
        }
      `
  })
  console.log(query)
  const response = await fetch('http://localhost:8000/graphl', {
    headers: { 'content-type': 'application/json' },
    method: 'POST',
    body: query
  })
  const responseJson = await response.json()
  console.log(responseJson.data)
  return responseJson.data
}

const getPurchaseNotification = (event, context) => {
  const message = event.data
    ? JSON.parse(Buffer.from(event.data, 'base64').toString())
    : 'Hello, World'
  const notification =
    message && message.message && message.message.data
      ? JSON.parse(Buffer.from(message.message.data, 'base64').toString())
      : 'No message'
  updatePurchase(notification)
}

getPurchaseNotification(
  {
    data: 'ewogICJtZXNzYWdlIjogewogICAgImF0dHJpYnV0ZXMiOiB7CiAgICAgICJrZXkiOiAidmFsdWUiCiAgICB9LAogICAgImRhdGEiOiAiZXdvZ0lDSjJaWEp6YVc5dUlqb2lNUzR3SWl3S0lDQWljR0ZqYTJGblpVNWhiV1VpT2lKamIyMHVabUoyWlhOMElpd0tJQ0FpWlhabGJuUlVhVzFsVFdsc2JHbHpJam9pTVRZeU5qVTFORGM1TlRBd01DSXNDaUFnSW5OMVluTmpjbWx3ZEdsdmJrNXZkR2xtYVdOaGRHbHZiaUk2Q2lBZ2V3b2dJQ0FnSW5abGNuTnBiMjRpT2lJeExqQWlMQW9nSUNBZ0ltNXZkR2xtYVdOaGRHbHZibFI1Y0dVaU9qUXNDaUFnSUNBaWNIVnlZMmhoYzJWVWIydGxiaUk2SWxCVlVrTklRVk5GWDFSUFMwVk9JaXdLSUNBZ0lDSnpkV0p6WTNKcGNIUnBiMjVKWkNJNkltSnlYMlppZG1WemRGOXdjbVZ0YVhWdFgzbGxZWEpzZVNJS0lDQjlDbjA9IiwKICAgICJtZXNzYWdlSWQiOiAiMTM2OTY5MzQ2OTQ1IgogIH0sCiAgInN1YnNjcmlwdGlvbiI6ICJwcm9qZWN0cy9teXByb2plY3Qvc3Vic2NyaXB0aW9ucy9teXN1YnNjcmlwdGlvbiIKfQ=='
  },
  null
)
