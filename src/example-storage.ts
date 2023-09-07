/* eslint-disable max-lines-per-function */
import type { IStorage, ProjectData } from 'grapesjs'
import { sleep } from './sleep'

const PROJECT_DATA = {
  assets: [],
  styles: [],
  pages: [
    {
      id: 'page1',
      type: 'main',
      frames: [
        {
          id: 'frame1',
          component: {
            type: 'wrapper',
            stylable: [
              'background',
              'background-color',
              'background-image',
              'background-repeat',
              'background-attachment',
              'background-position',
              'background-size',
            ],
          },
        },
      ],
    },
  ],
}

export class ExampleStorage implements IStorage {
  async load(options = {}): Promise<ProjectData> {
    console.log('ExampleStorage.load() - options', options)

    await sleep(1000)

    return Promise.resolve(PROJECT_DATA)
  }

  async store(data: ProjectData, options = {}): Promise<any> {
    console.log('ExampleStorage.save() - data, options', data, options)

    await sleep(1000)

    return Promise.resolve(data)
  }
}
