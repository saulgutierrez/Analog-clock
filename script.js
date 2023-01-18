setInterval(() => {
    // Getting the system time
    d = new Date();
    htime = d.getHours();
    mtime = d.getMinutes();
    stime = d.getSeconds();

    hrotation = 30 * htime + mtime / 2;     // 30 degrees of a circle for each hour (30 * 12 hours = 360)
    mrotation = 6 * mtime;                  // 6 degrees of a circle for each minute (6 * 60 mins = 360)
    srotation = 6 * stime;                  // 6 degrees of a circle for each second (6 * 60 seconds = 360)

    // Add motion to all the time operators, with the transform CSS property
    hour.style.transform = `rotate(${hrotation}deg)`;
    minute.style.transform = `rotate(${mrotation}deg)`;
    second.style.transform = `rotate(${srotation}deg)`;
}, 1000) // Call this function every second