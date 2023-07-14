const ExecutionPermit = ({ response }) => {
  if (response.status === 401) {
    localStorage.clear()
    window.location.reload()
  }
  if (response.status === 403) {
    window.location.href = '/incidencias'
  }
}

export default ExecutionPermit
