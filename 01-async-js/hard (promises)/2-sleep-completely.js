/*
 * Write a function that halts the JS thread (make it busy wait) for a given number of milliseconds.
 * During this time the thread should not be able to do anything else.
 * the function should return a promise just like before
 */

function sleep(milliseconds) {
    const beforeTime = Date.now()

    // busy wait
    for (let i = 0; i < 1000000000000; i++) {
        const currentTime = Date.now()
        if (currentTime - beforeTime >= milliseconds) {
            break;
        }
    }

    return new Promise((resolve => resolve()))
}

module.exports = sleep;
