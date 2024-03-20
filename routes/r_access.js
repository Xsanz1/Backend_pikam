const router = require('express').Router();
const {
    post_access,
    put_access,
    delete_access,
    get_all_access,
    get_detail_access,
    get_unique_access,
    get_count_access,
} = require('../controllers/c_access');

// POST /access untuk membuat akses baru
router.post('/access', authenticate, adminOnly, post_access);

// PUT /access/:access_uuid untuk memperbarui akses yang ada
router.put('/access/:access_uuid', authenticate, adminOnly, put_access);

// DELETE /access/:access_uuid untuk menghapus akses
router.delete('/access/:access_uuid', authenticate, adminOnly, delete_access);

// GET /access untuk mendapatkan semua akses
router.get('/access', authenticate, adminOnly, get_all_access);

// GET /access/:access_uuid untuk mendapatkan detail akses berdasarkan UUID
router.get('/access/:access_uuid', authenticate, adminOnly, get_detail_access);

// GET /access/unique untuk mendapatkan akses unik
router.get('/access/unique', authenticate, adminOnly, get_unique_access);

// GET /access/count untuk mendapatkan jumlah total akses
router.get('/access/count', authenticate, adminOnly, get_count_access);

module.exports = router;
