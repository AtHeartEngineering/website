export const onServiceWorkerUpdateReady = () => {
  const answer = window.confirm(
    `Reload to display the latest version`
  )
  if (answer === true) {
    window.location.reload()
  }
}