class ShowAPI {
    async getShows() {
        const fileContents = await this.fetch();
        const shows = this.parse(fileContents);
        return shows;
    }

    async fetch() {
        const response = await fetch('2020-03-22.txt');
        const txt = await response.text();
        return txt;
    }

    parse(fileContents) {
        const showRaw = fileContents.split('\n');
        let shows = [];
        showRaw.map(raw => {
            const showData = raw.split('||');
            let show = {
                'time': showData[0],
                'artist': showData[1],
                'link': showData[2],
                'hashCode': this.hash(raw)
            }
            shows.push(show)
        })
        return shows;
    }

    hash(str) {
        var hash = 0, i, chr;
            for (i = 0; i < this.length; i++) {
                chr   = this.charCodeAt(i);
                hash  = ((hash << 5) - hash) + chr;
                hash |= 0; // Convert to 32bit integer
            }
        return hash;
    }
}

export default ShowAPI