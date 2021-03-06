// import fs from 'fs'

// export const getFiles = (dir: string, files_?: string[]) => {
//   files_ = files_ || []
//   const files = fs.readdirSync(dir)
//   for (const i in files) {
//     const name = `${dir}/${files[i]}`
//     if (fs.statSync(name).isDirectory()) {
//       getFiles(name, files_)
//     } else {
//       files_.push(name)
//     }
//   }
//   return files_
// }

export type ObjType = {
  [key: string]: string | ObjType[]
}

export const flatLinks = (
  obj: ObjType,
  property: string,
  key: string,
  level: number,
  filter = (obj: ObjType) => true,
) => {
  const res: (ObjType[] | string)[] = []

  const traverse = (obj: ObjType, property: string, count: number) => {
    if (property in obj && Array.isArray(obj[property])) {
      // eslint-disable-next-line @typescript-eslint/ban-ts-comment
      // @ts-ignore
      obj[property].forEach(_property => {
        if (count <= level && filter(_property)) {
          if (_property[property]) traverse(_property, property, count + 1)
          if (count === level) res.push(_property[key])
        }
      })
    }
  }
  traverse(obj, property, 0)
  return res
}

export const getPathsSlug = (links: string[]) =>
  links.map(link => {
    const [, slug] = link.split('/')
    return { params: { slug } }
  })

export const getPathsSlugPost = (links: string[]) =>
  links.map(link => {
    const [, slug, post] = link.split('/')
    return { params: { slug, post } }
  })
