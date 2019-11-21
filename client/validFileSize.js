import printMessage from './printMessage';

export default function validFileSize(fileSize) {
  const { __FILE_MAX_SIZE__  } = window;
  const fileSizeInKb = fileSize / 1000;

  if (__FILE_MAX_SIZE__ < fileSizeInKb) {
    const maxFileSizeInMb = __FILE_MAX_SIZE__ / 1000;
    printMessage(`Wczytany plik jest zbyt duży. Maksymalny rozmiar to ${maxFileSizeInMb} MB`);
  }
}