const createUser = async ()  => {
    const userData = {
        property: "hello",
    };
    const res = await fetch("/api/user", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify(userData),
    });
    return res;
}

export default createUser;
