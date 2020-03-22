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
            if (
                !showData ||
                showData.length < 3
            ) {
                return;
            }
            let show = {
                'artist': showData[0],
                'time': showData[1],
                'link': showData[2],
                'hashCode': this.hash(raw)
            }
            shows.push(show)
        })
        return shows;
    }

    hash(str) {
        // from the wild interwebs...
        var hash = 0, i, chr;
            for (i = 0; i < this.length; i++) {
                chr   = this.charCodeAt(i);
                hash  = ((hash << 5) - hash) + chr;
                hash |= 0;
            }
        return hash;
    }
}

export default ShowAPI