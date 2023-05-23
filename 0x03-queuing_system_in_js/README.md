# 0x03. Queuing System in JS

![image](https://s3.amazonaws.com/alx-intranet.hbtn.io/uploads/medias/2020/1/1486e02a78cdf7b4557c.png?X-Amz-Algorithm=AWS4-HMAC-SHA256&X-Amz-Credential=AKIARDDGGGOUSBVO6H7D%2F20230523%2Fus-east-1%2Fs3%2Faws4_request&X-Amz-Date=20230523T093354Z&X-Amz-Expires=86400&X-Amz-SignedHeaders=host&X-Amz-Signature=b6cf428d1ade446a259c20c0f2c5d2c3b61aa945c9d5b09ae8eda8051dbcd268)

## Resources

**Read or watch**:

- [Redis quick start](https://intranet.alxswe.com/rltoken/8xeApIhnxgFZkgn54BiIeA)
- [Redis client interface](https://intranet.alxswe.com/rltoken/1rq3ral-3C5O1t67dbGcWg)
- [Redis client for Node JS](https://intranet.alxswe.com/rltoken/mRftfl67BrNvl-RM5JQfUA)
- [Kue](https://intranet.alxswe.com/rltoken/yTC3Ci2IV2US24xJsBfMgQ) *deprecated but still use in the industry*

## Tasks

### 0. Install a redis instance

Download, extract, and compile the latest stable Redis version (higher than 5.0.7 - [https://redis.io/download/](https://intranet.alxswe.com/rltoken/v6VB9ZwmVfppL0OmzbmVWQ)):

```sh
wget http://download.redis.io/releases/redis-6.0.10.tar.gz
tar xzf redis-6.0.10.tar.gz
cd redis-6.0.10
make
```

- Start Redis in the background with `src/redis-server`

```sh
src/redis-server &
```

- Make sure that the server is working with a ping `src/redis-cli ping`

```sh
PONG
```

- Using the Redis client again, set the value `School` for the key `Holberton`

```sh
127.0.0.1:[Port]> set Holberton School
OK
127.0.0.1:[Port]> get Holberton
"School"
```

- Kill the server with the process id of the redis-server (hint: use `ps` and `grep`)

```sh
kill [PID_OF_Redis_Server]
```

Copy the `dump.rdb` from the `redis-5.0.7` directory into the root of the Queuing project.

Requirements:

- Running `get Holberton` in the client, should return `School`
