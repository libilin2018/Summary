/* 
machine('ygy')
  .wait(5)
  .do('eat')
  .execute();
  // start ygy
  // wait 5s（这里等待了5s）
  // ygy eat
*/
const defer = sec => new Promise(resolve => setTimeout(resolve, sec*1000))
function machine (name) {
  let context = {},
      tasks = []
  const initTask = () => {
    console.log(`start ${name}`)
  }
  tasks.push(initTask)
  function _do (str) {
    const task = () => {
      console.log(`${name} ${str}`)
    }
    tasks.push(task)
    return context
  }
  
  function wait (time) {
    const task = async () => {
      console.log(`wait ${time}s`)
      await defer(time)
    }
    tasks.push(task)
    return context
  }

  function firstWait (time) {
    const task = async () => {
      console.log(`wait ${time}s`)
      await defer(time)
    }
    tasks.unshift(task)
    return context
  }

  function execute () {
    tasks.reduce(async (prev, next) => {
      await prev
      await next()
    }, undefined)
  }

  return Object.assign(context, {
    do: _do,
    wait,
    firstWait,
    execute
  })
}

machine('billy')
  .do('eat')
  .wait(5)
  .do('sleep')
  .execute()