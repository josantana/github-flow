
const name = value => typeof value === 'string' && value.length >= 2;

const email = value => !/^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,3})+$/.test(value);

export {
    name,
    email,
};
