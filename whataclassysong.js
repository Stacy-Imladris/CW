class Song {
    constructor(title, artist) {
      this.title = title
      this.artist = artist
      this.listeners = []
    }
    howMany(listeners) {
      let arr = [...new Set(listeners.map(m => m.toLowerCase()))]
      let newPeople = arr.filter(f => !this.listeners.includes(f))
      this.listeners = [...this.listeners, ...newPeople]
      return newPeople.length
    }
  }