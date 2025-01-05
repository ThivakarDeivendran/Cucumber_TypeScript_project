import { transports, format } from 'winston';

export function loggerOption(scenarioName : String){
    return{
        transports:[
            new transports.File({
                filename:`testReportResults/logs/${scenarioName}/log.log`,
                level:'info',
                format: format.combine(
                    format.timestamp({format: 'MM-DD-YYYY HH:mm:ss'}),
                    format.align(),
                    format.printf(info => `${info.level}: ${[info.timestamp]}: ${info.message}`)
                )
            })
        ]
    }
}