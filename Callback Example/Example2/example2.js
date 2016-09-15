/**
 * Created by zhehuang on 9/15/2016.
 */
downloadPhoto('http://coolcats.com/cat.gif', handlePhoto)

function handlePhoto (error, photo) {
    if (error) console.error('Download error!', error)
    else console.log('Download finished', photo)
}

console.log('Download started')