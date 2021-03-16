export default function setUserNetIncome(data, setData) {
    data.income.length > 0 && data.jobStatus.length > 0 ? setData({ ...data, netIncome: setNetIncome(data.income, data.jobStatus) }) : setData({ ...data, netIncome: '' })
}

function setNetIncome(userIncome, jobStatus) {
    if (jobStatus === 'employed') {
        let healthInsurance = userIncome >= 58050 ? 58050 * 0.073 : userIncome * 0.073
        let pflege = userIncome >= 58050 ? 58050 * 0.01525 : userIncome * 0.01525
        let rente = userIncome >= 85200 ? 85200 * 0.093 : userIncome * 0.093
        let arbeitslos = userIncome >= 85200 ? 85200 * 0.012 : userIncome * 0.012
        let income = userIncome - healthInsurance - pflege - rente - arbeitslos
        let werbungskosten = 1000
        let sonderAllg = 36
        let vorsorgeAlter = rente * 2 * 0.92 - rente
        let vorsorgeSonstige = (healthInsurance + pflege + arbeitslos) > 1900 ? ((healthInsurance * 0.96) + pflege) : (healthInsurance * 0.96 + pflege + arbeitslos)
        let calcIncome = Math.floor(userIncome - werbungskosten - sonderAllg - vorsorgeAlter - vorsorgeSonstige)
        return taxEmployed(income, calcIncome, userIncome) 
    }      
}

function taxEmployed(income, calcIncome, userIncome) {
        if (calcIncome >= 9745 && calcIncome <= 14753) {
            let y = (calcIncome - 9744) / 10000
            let tax = Math.floor((995.21 * y + 1400) * y)
            income = income - tax
            return income
        }
        if (calcIncome >= 14754 && calcIncome <= 57918) {
            let z = (calcIncome - 14753) / 10000
            let tax = Math.floor((208.85 * z + 2397) * z + 950.96)
            income = income - tax
            return income
        }
        if (calcIncome >= 57919 && calcIncome <= 274612) {
            let tax = Math.floor(0.42 * calcIncome - 9136.63)
            income = calcIncome >= 73000 ? income - (tax * 0.055) - tax : income - tax
            return income
        }
        if (calcIncome >= 274613) {
            let tax = Math.floor(0.45 * calcIncome - 17374.99)
            income = income - (tax * 0.055) - tax
            return income
        }
        if (userIncome >= 5400) {
            return income
        }
        else {
            return userIncome
        }
    }