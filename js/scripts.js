var disease = {
    initial_risk: 0,
    smokes: false,
    family_history: null,
    exercise: true,
    eating_habits: false,
    blood_pressure: 120,
    risk: function() {
        if (this.smokes === true) {
            this.initial_risk += 10;
        }
        if (this.family_history === 'cancer') {
            this.initial_risk += 10;
        } else if (this.family_history === 'autism') {
            this.initial_risk += 10;
        } else if (this.family_history === 'hemophilia') {
            this.initial_risk += 10;
        } else if (this.family_history === 'cri du chat') {
            this.initial_risk += 10;
        } else if (this.family_history === 'arthritis') {
            this.initial_risk += 10;
        } else if (this.family_history === 'nothing') {
            this.initial_risk += 0;
        }
        if (this.exercise === false) {
            this.initial_risk += 10;
        }
        if (this.eating_habits === true) {
            this.initial_risk += 10;
        }
        if (this.blood_pressure > 120) {
            this.initial_risk += 5;
        } else { this.risk = 0;}
        if (this.initial_risk === 100) {
            this.initial_risk = "R.I.P";
        }
        return "general disease risk : " + this.initial_risk + "%";
    }
};
