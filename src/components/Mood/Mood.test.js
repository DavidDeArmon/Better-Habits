const applyColor = require('./MoodDash')
test('apply color',()=>{
    expect(applyColor({mood:'Great'},1,'2018-10-29')).toBe(<div key = '1' className='box' id ='Great'>{}</div>)
})