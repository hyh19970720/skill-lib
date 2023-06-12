import path from 'path';

/**
 * 获取项目根路径
 * @descrition 末尾不带斜杠
 * @returns
 */
export function getRootPath() {
    return path.resolve(process.cwd());
}

/**
 * 获取一级目录路径
 * @param primaryPath - 目录名称
 * @descrition 末尾不带斜杠
 * @returns
 */
export function getPrimaryPath(primaryPath = 'src') {
    let root = getRootPath();
    return `${root}/${primaryPath}`;
}
