import printMessage from './printMessage';

export default function validFileSize(fileSize) {
  const { __FILE_MAX_SIZE__, __TRANSLATIONS__  } = window;
  const fileSizeInKb = fileSize / 1000;

  if (__FILE_MAX_SIZE__ < fileSizeInKb) {
    const maxFileSizeInMb = __FILE_MAX_SIZE__ / 1000;
    printMessage(`${__TRANSLATIONS__.tooLargeFile} ${maxFileSizeInMb} MB`);
  }
}