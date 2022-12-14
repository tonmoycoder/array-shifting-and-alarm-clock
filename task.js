// array shifting

function ShiftedArray(arr,d,n)
{

	var bucket=new Array(N);
	
	let k = 0;

	for (let i = d; i < N; i++) {
		bucket[k] = arr[i];
		k++;
	}


	for (let i = 0; i < d; i++) {
		bucket[k] = arr[i];
		k++;
	}

	for (let i = 0; i < N; i++) {
		console.log(bucket[i]+" ");
	}
}

let arr = [ 1, 3, 2, 7, 4, 6 ];
let N = arr.length;
let d = 3;
ShiftedArray(arr, d, N);

// alarm clock

class AlarmClock {
    constructor() {
        this.currentTime = null;
        this.alarms = [];
        this.snoozes = 0;
    }

    setTime(time) {
        this.currentTime = time;
    }

    createAlarm(time, day, alert) {
        this.alarms.push({
            time,
            day,
            alert
        });
    }

    snooze() {
        if (this.snoozes >= 3) {
            console.log("Cannot snooze anymore");
            return;
        }

        this.snoozes += 1;
        console.log("Snoozing for 5 minutes");
    }

    deleteAlarm(time) {
        for (let alarm of this.alarms) {
            if (alarm.time === time) {
                this.alarms = this.alarms.filter(a => a !== alarm);
                console.log("Alarm deleted");
                return;
            }
        }
        console.log("Alarm not found");
    }
}

const alarmClock = new AlarmClock();

// Set the time
alarmClock.setTime("12:00");

// Create an alarm
alarmClock.createAlarm("8:00", "Monday", "Wake up!");

// Snooze the alarm
alarmClock.snooze();

// Delete the alarm
alarmClock.deleteAlarm("8:00");
