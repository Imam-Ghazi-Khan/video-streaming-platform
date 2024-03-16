export const formatViews = (views) => {
    if (views >= 1e6) {
        return (views / 1e6).toFixed(1) + 'M';
    } else if (views >= 1e3) {
        return (views / 1e3).toFixed(1) + 'K';
    } else {
        return views;
    }
}

export const calculateTimeAgo = (dateString) => {
    const date = new Date(dateString);
    const now = new Date();
    const diffInSeconds = Math.floor((now - date) / 1000);

    if (diffInSeconds < 60) {
        return diffInSeconds + 's ago';
    } else if (diffInSeconds < 3600) {
        return Math.floor(diffInSeconds / 60) + 'm ago';
    } else if (diffInSeconds < 86400) {
        return Math.floor(diffInSeconds / 3600) + 'h ago';
    } else {
        return Math.floor(diffInSeconds / 86400) + 'd ago';
    }
}
