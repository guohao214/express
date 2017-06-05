module.exports = {
	insert: 'insert into user(id, name, age) values(null, ?, ?)',
	queryAll: 'select * from user',
	queryById: 'select * from user where id=?',
	deleteById: 'delete from user where id=?',
	updateById: 'update user set name=?, age=? where id=?'
}
