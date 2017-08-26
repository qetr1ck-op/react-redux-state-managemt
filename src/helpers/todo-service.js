const baseUrl = process.env.REACT_APP_BASE_URL;

export async function getTodosService() {
	const resp = await fetch(baseUrl)
	return await resp.json()
}

export async function postTodoService(todoName) {
	const resp = await fetch(baseUrl, {
		method: 'POST',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
		body: JSON.stringify({ name: todoName, isCompleted: false }),
	})
	return await resp.json()
}

export async function updateTodoService({id, isCompleted}) {
  const resp = await fetch(`${baseUrl}/${id}`, {
    method: 'PATCH',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ isCompleted }),
  })
  return await resp.json()
}

export async function removeTodoService({id}) {
  return await fetch(`${baseUrl}/${id}`, {
    method: 'DELETE',
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
  })
}
