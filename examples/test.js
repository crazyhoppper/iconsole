require('iconsole').prefix('[iconsole] ')

console.log('test log %d', 222)
console.warn('test warn %s', 'fsafdas')
console.error('test error')

console.dir({
   a: '1',
   b: 2,
   c: {
    d: 'fdafdaaf\nfdafda',
    e: {
        f: 'afdafdsa'
    }
   }
})
