
export const addChannel = (channel) => {
    const channelArray = localStorage.getItem("channels")
    const parsedArray = channelArray ? JSON.parse(channelArray) : []
    const addedArray = [...parsedArray, channel]
    const removedArray = [...new Set(addedArray)]

    localStorage.setItem("channels", JSON.stringify(removedArray))
}