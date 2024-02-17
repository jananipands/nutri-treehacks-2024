import Realm from "realm";

// Define your object model
export class User extends Realm.Object {
    static schema = {
        name: 'User',
        properties: {
            _id: 'objectId',
            name: { type: 'string', indexed: true },
            email: { type: 'string', indexed: true },
            password: { type: 'string', indexed: true },
            medication: { type: [], indexed: true}
        },
        primaryKey: '_id',
    };
}
