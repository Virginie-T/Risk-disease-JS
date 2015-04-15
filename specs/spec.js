describe('risk_calculator', function() {
    describe('disease', function() {
        it('will return general disease risk : 0%', function() {
                var testDisease = Object.create(disease);
                expect(testDisease.risk()).to.equal("general disease risk : 0%");
        });
    });
    describe('smoker', function() {
        it('will return general disease risk : 10%', function() {
            var testDisease = Object.create(disease);
            disease.smokes = true;
            expect(testDisease.risk()).to.equal("general disease risk : 10%");
        });
    });
    describe('family_history', function() {
        it('will return general disease risk : 20%', function() {
            var testDisease = Object.create(disease);
            disease.family_history = 'cancer';
            disease.smokes = true;
            expect(testDisease.risk()).to.equal('general disease risk : 20%');
        });
    });
    describe('family_history', function() {
        it('will return general disease risk : 20%', function() {
            var testDisease = Object.create(disease);
            disease.family_history = 'arthritis';
            disease.smokes = true;
            expect(testDisease.risk()).to.equal('general disease risk : 20%');
        });
    });
    describe('family_history', function() {
        it('will return general disease risk : 20%', function() {
            var testDisease = Object.create(disease);
            disease.family_history = 'cancer';
            disease.smokes = true;
            disease.eating_habits = true;
            disease.blood_pressure = 140;
            disease.exercise = false;
            expect(testDisease.risk()).to.equal('general disease risk : 45%');
        });
    });
});
