import firebase from 'firebase'

export const get_user_all = (data) => {
  console.log('INI DATA DI ACTION', data);
  return {
    type: 'GET_USER',
    payload: {
      data
    }
  }
}

export const get_user_one = (data) => {
  return {
    type: 'GET_USER_ONE',
    payload: {
      data
    }
  }
}

export const delete_user = (data) => {
  return {
    type: 'DELETE_USER',
    payload: {
      data
    }
  }
}


export const edit_user = (data) => {
  return {
    type: 'EDIT_USER',
    payload: {
      data
    }
  }
}


export const getUserAPI = (dispatch) => {
    return firebase.database().ref().child('reactpwdmngr/user').on('value', snapshot => {
      console.log('SNAPSHOT', snapshot.val());
      let data = []
        for(var idx in snapshot.val()) {
          data.push({
            id: idx,
            url:  snapshot.val()[idx].url,
            username: snapshot.val()[idx].username,
            password: snapshot.val()[idx].password,
            createdAt: snapshot.val()[idx].createdAt,
            updatedAt: snapshot.val()[idx].updatedAt
          })
        }
        dispatch(get_user_all(data))
    })
}

export const postUser = (form) => {
  return (dispatch) => {
    return firebase.database().ref('reactpwdmngr/user').push(form)
  }
}
