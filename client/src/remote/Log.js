/**
 * Copyright (c) Camunda Services GmbH.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */

export default class Log {

  constructor(backend) {
    this.backend = backend;
  }

  error(...args) {
    this.backend.send('client:error', ...args);
  }
}