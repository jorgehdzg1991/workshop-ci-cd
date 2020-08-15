import { OK } from 'http-status-codes';
import BaseController from './BaseController';

export default class HelloController extends BaseController {
  static basePath = '/api/hello';

  static mountController(app) {
    return new HelloController(app);
  }

  initialize() {
    this.app.get(HelloController.basePath, this.sayHello.bind(this));
    this.app.get(`${HelloController.basePath}/greet/:name`, this.greet.bind(this));
  }

  sayHello(req, res) {
    this.respond(res, OK, { hello: 'world' });
  }

  greet(req, res) {
    const { name } = req.params;
    this.respond(res, OK, { greet: `Hello ${name}!` });
  }
}
