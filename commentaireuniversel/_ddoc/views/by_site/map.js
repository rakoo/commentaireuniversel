function(doc) {
  if (doc.base_url && doc.comment) {
    emit ([doc.base_url, doc.date_added], doc.comment)
  }
}
