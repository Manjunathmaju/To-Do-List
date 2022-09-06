import { LocalStorage } from './db/local-storage.js';
import { SessionStorage } from './db/session-storage.js';

function InterfaceStorage() {

    function getStorageInstance(dbType) {
        return {
            local: new LocalStorage('tasks'),
            session: new SessionStorage('tasks')
        }[dbType]
    }

    return {
        setData: (dbType, data) => {
            getStorageInstance(dbType).setData(data);
        },
        getData: (dbType) => getStorageInstance(dbType).getData()
    }
}

InterfaceStorage().setData('session', { id: Date.now(), title: 'Get Groceries', status: false });

console.log(InterfaceStorage().getData('local'));

