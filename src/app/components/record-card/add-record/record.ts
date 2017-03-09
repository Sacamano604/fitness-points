export class Record {
    constructor (
        public activityDate: string,
        public activity: string,
        public fitnessActivity: string,
        public personalActivity: string,
        public volunteerActivity: string,
        public duration: string,
        public pointsEarned: number,
        public notes?: string
    ) {}

}