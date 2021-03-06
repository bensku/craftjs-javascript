import { test } from 'zora';

test('Scheduling', async (t) => {
  const wait = async (
    func: typeof setTimeout | typeof setInterval,
    name: string,
  ) => {
    let tid: number | undefined;
    const promise = new Promise<boolean>((resolve) => {
      tid = func(() => resolve(true), 500);
    });
    t.eq(typeof tid, 'number', `${name} returns a task id`);
    const value = promise.catch(t.fail);
    t.ok(value, `${name} resolves`);
    return tid;
  };

  await wait(setTimeout, 'setTimeout');
  const tid = await wait(setInterval, 'setInterval');
  const taskCount = server.scheduler.pendingTasks.size();
  clearInterval(tid);
  const newTaskCount = server.scheduler.pendingTasks.size();
  t.eq(taskCount - 1, newTaskCount, 'clearInterval cancels task');
});
