function formatGrade(grade) {
    let output = '';

    if(grade < 3) {output = 'Fail'; grade = 2}
    else if(grade < 3.5) {output = 'Poor'}
    else if(grade < 4.5) {output = 'Good'}
    else if(grade < 5.5) {output = 'Very good'}
    else if(grade >= 5.5) {output = 'Excellent'}

    console.log(`${output} (${grade.toFixed(grade < 3 ? 0 : 2)})`)
}


formatGrade(3.33)
formatGrade(4.50)
formatGrade(2.99)