const notificationResponse = async (goalReached)  => {
    const res = await fetch("/api/habitSuccess", {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            userId: localStorage.getItem('credentials'),
            habitId_sleeping: 0,
            success: goalReached,
        }),
    });
    console.log(res);
    res = res.json();
    console.log(res);
    return res;
}

export default notificationResponse;