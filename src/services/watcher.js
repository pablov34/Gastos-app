import {auth, db} from './firebase'

//controlar si el usuario esta o no logueado
export function watchUserChanges(callback)
{
    const unsub = auth.onAuthStateChanged((user) => {
    if(user && !user.isAnonymous) {
        console.log('logueado')
        callback({
            id:user.uid,
            email:user.email,
            displayName:user.displayName
        });
    }
    else
    {
        console.log('NO logueado')
        callback(null);
    }
    })
    return unsub;
}

//controlar cualquier cambio en la fuente de datos
export function watchExpenses(callback)
{
    const unsub = db.collection('expenses')
    .onSnapshot((snapshot) => {
            const docs = [];

            snapshot.forEach((doc) => {
                const data = doc.data()
                docs.push({
                    ...data,
                    id:doc.id
                })
            })
            
        callback(docs);
    });
    return unsub;
}