import Contentstack, {Config, Region} from 'contentstack'

// https://www.npmjs.com/package/contentstack

const contentStackKey = process.env.CONTENTSTACK_API_KEY || ''
const contentStackToken = process.env.CONTENTSTACK_API_TOKEN || ''
const contentStackEnv = process.env.CONTENTSTACK_API_ENV || ''

const config: Config = {
  api_key: contentStackKey,
  delivery_token: contentStackToken,
  environment: contentStackEnv,
  region: Region.US,
}

const Stack = Contentstack.Stack(config)
export type CmsContentTypes =
  | 'home'

export const getAllEntries = async (contentType: CmsContentTypes) => {
  const Query = Stack.ContentType(contentType).Query();

  const entry = await Query.toJSON()
      .find()
      .then(function success(result) {
        // result is array where -
        return result[0]
      }, function error(err) {
        // err object
        return err
      })
console.log("entry", entry)
  return entry
}

export const getEntries = (contentType: CmsContentTypes, id: string | number) => {
  return Stack.ContentType(contentType).Query().equalTo('uid', id)
}
