const getState = ({ getStore, getActions, setStore }) => {
    return {
        store: {
            email: 'lrodriguez@4geeks.co',
            password: 'adminadmin'
        },
        actions: {
            onSubmit: data => console.log({ ...data }),
            onChange: e => { }
        }
    }
}

export default getState;