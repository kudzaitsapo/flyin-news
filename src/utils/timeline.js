const epochs = [
    ['year', 31536000],
    ['month', 2592000],
    ['day', 86400],
    ['hour', 3600],
    ['minute', 60],
    ['second', 1]
];


const getDuration = (timeAgoInSeconds) => {
    for (let [name, seconds] of epochs) {
        const interval = Math.floor(timeAgoInSeconds / seconds);
        if (interval >= 1) {
            return {
                interval: interval,
                epoch: name
            };
        }
    }
};

export const timeAgo = (date) => {
    try {
        const dateDiff = new Date() - new Date(date);
        const timeAgoInSeconds = Math.floor(Math.abs(dateDiff) / 1000);
        const {interval, epoch} = getDuration(timeAgoInSeconds);
        const suffix = interval === 1 ? '' : 's';
        return `${interval} ${epoch}${suffix} ago`;
    } catch (error) {
        return `0 seconds ago`;
    }
};