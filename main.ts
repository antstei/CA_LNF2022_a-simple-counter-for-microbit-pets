const enum Intervals {
    //% block="Sekundentakt"
    Seconds = 1000,
    //% block="Minutentakt"
    Minutes = Seconds * 60
}

const enum CountActions {
    //% block="zähle weiter"
    Continue,
    //% block="höre auf zu zählen"
    Stop
}

//% block="Zähler"
//% weight=110
//% color="#007A4B" icon="\uf163"
namespace Counter {  
    let currentCount: number = 1;
    let currentInterval: Intervals = Intervals.Seconds;

    let minCount: number = 1;

    //% blockId=counter_start_counting_from_min
    //% block="beginne bei $minCount im $interval zu zählen"
    //% minCount.min=1 minCount.max=100 minCount.defl=1
    //% expandableArgumentMode="toggle"
    export function startCountingFromMin(minCount: number, interval: Intervals): void {
        currentCount = minCount
        currentInterval = interval

        basic.forever(() => {
            basic.pause(currentInterval)
            currentCount += 1
        })
    }

    //% blockId=counter_start_counting_from_min_again
    //% block="beginne wieder von vorne zu zählen"
    export function resetCounter(): void {
        currentCount = minCount
    }

    //% blockId=counter_on_count_do
    //% block="Wenn bis $countStop gezählt, dann $action und"
    //% countStop.min=1 countStop.max=100 countStop.defl=40
    //% expandableArgumentMode="toggle"
    export function onCountDo(countStop: number, action: CountActions, handler: () => void) {
        basic.forever(() => {
            if (currentCount == countStop) {
                switch (action) {
                    case CountActions.Continue:
                        handler()
                        break
                    case CountActions.Stop:
                        handler()
                        for (; ;) { }
                }
            }
        })
    }
}