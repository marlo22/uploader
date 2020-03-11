import printMessage from './printMessage';

export default function validFileType(mimeType) {
  const allowedTypes = window.__FILE_ALLOWED_FORMATS__.split(',');
  
  if (!allowedTypes.includes(mimeType)) {
    const { __TRANSLATIONS__  } = window;
    printMessage(`${__TRANSLATIONS__.notAllowedExtension} ${mimeType}`);
  }
}